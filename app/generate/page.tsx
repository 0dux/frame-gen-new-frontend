"use client";

import { Loader, WandSparkles } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  colorSchemes,
  type AspectRatio,
  type IThumbnail,
  type ThumbnailStyle,
} from "../assets/assets";
import api from "../config/api";
import { useAuth } from "../context/auth-context";
import AspectRatioSelector from "./components/aspect-ratio-selector";
import ColorSchemeSelector from "./components/color-scheme-selector";
import PreviewPanel from "./components/preview-panel";
import StyleSelector from "./components/style-selector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Generate = () => {
  const { id } = useParams();

  const router = useRouter();

  const pathname = usePathname();

  const { isLoggedIn, refreshCredits } = useAuth();

  const [thumbnail, setThumbnail] = useState<IThumbnail | null>(null);
  const [loading, setLoading] = useState(false);

  //thumbnail
  const [title, setTitle] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [aspectRatios, setAspectRatios] = useState<AspectRatio>("16:9");
  const [style, setStyle] = useState<ThumbnailStyle>("Bold & Graphic");
  const [colorSchemeId, setColorSchemeId] = useState(
    (colorSchemes[0]?.id as string) ?? "",
  );

  const [fetchAttempts, setFetchAttempts] = useState(0);

  //Generate the thumbnail
  const handleGenerate = async () => {
    try {
      if (!isLoggedIn) {
        return toast.error("Please login to generate thumbnails.");
      }

      if (!title.trim()) {
        return toast.error("Title is required!");
      }

      setLoading(true);

      const api_payload = {
        title,
        prompt: additionalDetails,
        style,
        aspect_ratio: aspectRatios,
        color_scheme: colorSchemeId,
        text_overlay: true,
      };

      const { data } = await api.post(
        "/api/v1/thumbnail/generate",
        api_payload,
      );

      if (data.thumbnail) {
        router.push("/generate/" + data.thumbnail._id);
        toast.success(data.message);
        await refreshCredits();
      }
    } catch (error: any) {
      setLoading(false);
      console.error(error.message);
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  //fetch the thumbnail
  const fetchThumbnail = useCallback(async () => {
    try {
      const { data } = await api.get(`/api/v1/user/thumbnail/${id}`);

      const thumbnailData = data?.thumbnail || data;

      // console.log("Setting thumbnail data:", thumbnailData);

      setThumbnail(thumbnailData as IThumbnail);
      setTitle(thumbnailData?.title ?? "");
      setAspectRatios(thumbnailData?.aspect_ratio ?? "16:9");
      setStyle(thumbnailData?.style ?? "Bold & Graphic");
      setColorSchemeId(
        thumbnailData?.color_scheme ?? colorSchemes[0]?.id ?? "",
      );
      setAdditionalDetails(thumbnailData?.user_prompt ?? "");
      // Only stop loading if we have the image
      if (thumbnailData?.image_url || !thumbnailData?.isGenerating) {
        setLoading(false);
      }
    } catch (error: any) {
      console.error(error);
      toast.error(
        error?.response?.data?.message ||
          "Some error has occurred during generation",
      );
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (isLoggedIn && id) {
      fetchThumbnail();
      setFetchAttempts(0);
    }
  }, [id, isLoggedIn, fetchThumbnail]);

  //Whenever a thumbnail exists it is requested from the backend for 3 times only.
  useEffect(() => {
    if (isLoggedIn && id && loading && fetchAttempts < 3) {
      const interval = setInterval(() => {
        setFetchAttempts((prev) => {
          const newAttempts = prev + 1;
          if (newAttempts >= 3) {
            setLoading(false);
            toast.error(
              "Thumbnail generation is taking longer than expected. Please try again later.",
            );
          } else {
            fetchThumbnail();
          }
          return newAttempts;
        });
      }, 5 * 1000);

      return () => clearInterval(interval);
    }
  }, [id, isLoggedIn, loading, fetchAttempts, fetchThumbnail]);

  useEffect(() => {
    if (!id && thumbnail) {
      setThumbnail(null);
    }
  }, [pathname, id, thumbnail]);

  return (
    <div className="pt-24 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28 lg:pb-8">
        <div className="grid lg:grid-cols-[450px_1fr] gap-8 items-start">
          {/* left panel */}
          <Card className={`border shadow-lg bg-card/50 backdrop-blur-sm ${id && "pointer-events-none opacity-80"}`}>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                Generate Thumbnail
                <HugeiconsIcon icon={WandSparkles} className="h-5 w-5 text-blue-600 dark:text-blue-500" />
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Describe your masterpiece and let AI bring it to life.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Input field for generation*/}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title" className="font-medium">
                    Title or Topic
                  </Label>
                  <Input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength={100}
                    placeholder="e.g., How to Learn to Code Faster"
                    className="h-11 border-input bg-background/50 focus-visible:ring-blue-500/50"
                  />
                  <div className="flex justify-end">
                    <span className="text-[10px] text-muted-foreground font-mono">
                      {title.length}/100
                    </span>
                  </div>
                </div>

                {/* Aspect ratio Selector */}
                <AspectRatioSelector
                  value={aspectRatios}
                  onChange={setAspectRatios}
                />

                {/* Style Selector */}
                <StyleSelector
                  value={style}
                  onChange={setStyle}
                  isOpen={false}
                  setIsOpen={() => {}}
                />

                {/* ColorScheme Selector */}
                <ColorSchemeSelector
                  value={colorSchemeId}
                  onChange={setColorSchemeId}
                />

                {/* Additional Details  */}
                <div className="space-y-2">
                  <Label htmlFor="details" className="flex items-center gap-2 font-medium">
                    Additional Details
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest">(Optional)</span>
                  </Label>
                  <Textarea
                    id="details"
                    value={additionalDetails}
                    onChange={(e) => setAdditionalDetails(e.target.value)}
                    placeholder="Add extra objects, characters, or mood you want..."
                    rows={4}
                    className="bg-background/50 border-input focus-visible:ring-blue-500/50 resize-none leading-relaxed"
                  />
                </div>
              </div>

              {/* Submit Button */}
              {!id && (
                <Button
                  disabled={loading}
                  onClick={handleGenerate}
                  className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <HugeiconsIcon icon={Loader} className="animate-spin h-4 w-4" />
                      Generating...
                    </span>
                  ) : (
                    "Generate Thumbnail"
                  )}
                </Button>
              )}
            </CardContent>
          </Card>

          {/* right panel */}
          <div className="lg:sticky lg:top-32 space-y-6">
            <PreviewPanel
              thumbnail={thumbnail}
              isLoading={loading}
              aspectRatio={aspectRatios}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Generate;
