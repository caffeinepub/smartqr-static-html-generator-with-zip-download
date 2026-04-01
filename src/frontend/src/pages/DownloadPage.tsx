import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertCircle,
  Download,
  ExternalLink,
  FileArchive,
  FileCode,
  FileText,
  Image,
  Sparkles,
  Video,
} from "lucide-react";
import { useState } from "react";

// Version management - only latest version displayed
const CURRENT_VERSION = 27;

interface FileItem {
  name: string;
  path: string;
  description: string;
  featured?: boolean;
}

export default function DownloadPage() {
  const [downloading, setDownloading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Only show latest version of each file type
  const htmlFiles: FileItem[] = [
    {
      name: "index_updated.html",
      path: "/index_updated.html",
      description: "Enhanced homepage with full design and fixed icon sizing",
      featured: true,
    },
    {
      name: "smartqr.html",
      path: "/smartqr.html",
      description: "Full landing page with fixed icon sizing",
    },
    {
      name: "nfc-card-offer.html",
      path: "/nfc-card-offer.html",
      description: "NFC card special offer page with Stripe payment button",
    },
  ];

  const cssFiles: FileItem[] = [
    {
      name: "index.css",
      path: "/index.css",
      description:
        "Global stylesheet with responsive icon sizing using clamp() and media queries",
    },
  ];

  const jsFiles: FileItem[] = [
    {
      name: "index.js",
      path: "/index.js",
      description:
        "JavaScript for animations, navigation toggle, and smooth scrolling",
    },
  ];

  const promoFiles: FileItem[] = [
    {
      name: "tiktok-promo.html",
      path: "/tiktok-promo-static.html",
      description:
        "Animated TikTok-style promo for SmartQR — screen-record to create your video",
      featured: true,
    },
  ];

  const imageFiles = [
    {
      name: "hero-background.dim_1200x600.png",
      path: "/assets/generated/hero-background.dim_1200x600.png",
      zipPath: "generated/hero-background.dim_1200x600.png",
    },
    {
      name: "nfc-card-product.dim_400x300.png",
      path: "/assets/generated/nfc-card-product.dim_400x300.png",
      zipPath: "generated/nfc-card-product.dim_400x300.png",
    },
    {
      name: "smartqr-product-mockup.dim_800x600.png",
      path: "/assets/generated/smartqr-product-mockup.dim_800x600.png",
      zipPath: "generated/smartqr-product-mockup.dim_800x600.png",
    },
  ];

  const handleDownloadFile = async (path: string, filename: string) => {
    setDownloading(filename);
    setError(null);
    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${filename}`);
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Error downloading file:", err);
      setError(`Failed to download ${filename}. Please try again.`);
    } finally {
      setDownloading(null);
    }
  };

  const handleDownloadAll = async () => {
    setDownloading("all");
    setError(null);
    try {
      for (const file of [...htmlFiles, ...promoFiles]) {
        await handleDownloadFile(file.path, file.name);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
      for (const file of cssFiles) {
        await handleDownloadFile(file.path, file.name);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
      for (const file of jsFiles) {
        await handleDownloadFile(file.path, file.name);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
      for (const file of imageFiles) {
        await handleDownloadFile(file.path, file.name);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    } catch (err) {
      console.error("Error downloading files:", err);
      setError(
        "Failed to download all files. Please try downloading individually.",
      );
    } finally {
      setDownloading(null);
    }
  };

  const renderFileRow = (file: FileItem, extraButton?: React.ReactNode) => (
    <div
      key={file.name}
      className="flex items-center justify-between rounded-md bg-muted/50 p-3"
    >
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">
            V{CURRENT_VERSION} – {file.name}
          </p>
          {file.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              <Sparkles className="h-3 w-3" />
              Featured
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground">{file.description}</p>
      </div>
      <div className="flex items-center gap-2">
        {extraButton}
        <Button
          size="sm"
          variant="outline"
          onClick={() => handleDownloadFile(file.path, file.name)}
          disabled={downloading !== null}
          className="gap-2"
          data-ocid="download.secondary_button"
        >
          {downloading === file.name ? (
            <>
              <div className="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Downloading...
            </>
          ) : (
            <>
              <Download className="h-3 w-3" />
              Download
            </>
          )}
        </Button>
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-chart-1/5 to-background" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,oklch(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_80%,oklch(var(--chart-1)/0.1),transparent_50%)]" />

      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Static Export • Version {CURRENT_VERSION}
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Download Static Pages
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Latest versions of all HTML files, CSS stylesheet, JavaScript,
              image assets, and TikTok promo — ready for deployment
            </p>
          </div>

          {error && (
            <Alert
              variant="destructive"
              className="mb-8"
              data-ocid="download.error_state"
            >
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Version Notice */}
          <Alert className="mb-8 border-primary/50 bg-primary/5">
            <Sparkles className="h-4 w-4 text-primary" />
            <AlertDescription className="text-primary">
              <strong>Latest Release (V{CURRENT_VERSION}):</strong> All files
              below are the most current versions. Previous versions have been
              removed to ensure you always download the latest updates.
            </AlertDescription>
          </Alert>

          <Card className="mb-8 border-2 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileArchive className="h-6 w-6 text-primary" />
                Package Contents
              </CardTitle>
              <CardDescription>
                Latest version (V{CURRENT_VERSION}) of all files
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* TikTok Promo Section */}
                <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/5 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Video className="h-5 w-5 text-cyan-500" />
                    <h3 className="font-medium">TikTok Promo</h3>
                    <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-cyan-600">
                      New in V22
                    </span>
                  </div>
                  <div className="space-y-2">
                    {promoFiles.map((file) =>
                      renderFileRow(
                        file,
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-2 border-cyan-500/30 text-cyan-600 hover:bg-cyan-500/10"
                          onClick={() => window.open("/tiktok-promo", "_blank")}
                          data-ocid="download.link"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Preview
                        </Button>,
                      ),
                    )}
                  </div>
                </div>

                {/* HTML Files Section */}
                <div className="rounded-lg border p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">HTML Files</h3>
                  </div>
                  <div className="space-y-2">
                    {htmlFiles.map((file) => renderFileRow(file))}
                  </div>
                </div>

                {/* CSS Files Section */}
                <div className="rounded-lg border p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <FileCode className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">CSS Stylesheet</h3>
                  </div>
                  <div className="space-y-2">
                    {cssFiles.map((file) => renderFileRow(file))}
                  </div>
                </div>

                {/* JavaScript Files Section */}
                <div className="rounded-lg border p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <FileCode className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">JavaScript File</h3>
                  </div>
                  <div className="space-y-2">
                    {jsFiles.map((file) => renderFileRow(file))}
                  </div>
                </div>

                {/* Image Files Section */}
                <div className="rounded-lg border p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Image className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">Image Assets</h3>
                  </div>
                  <div className="space-y-2">
                    {imageFiles.map((file) => (
                      <div
                        key={file.name}
                        className="flex items-center justify-between rounded-md bg-muted/50 p-3"
                      >
                        <div className="flex-1">
                          <p className="text-sm font-medium">
                            V{CURRENT_VERSION} – {file.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Path: {file.zipPath}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            handleDownloadFile(file.path, file.name)
                          }
                          disabled={downloading !== null}
                          className="gap-2"
                          data-ocid="download.secondary_button"
                        >
                          {downloading === file.name ? (
                            <>
                              <div className="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
                              Downloading...
                            </>
                          ) : (
                            <>
                              <Download className="h-3 w-3" />
                              Download
                            </>
                          )}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 border-2 bg-gradient-to-br from-primary/5 to-chart-1/5 shadow-xl">
            <CardContent className="flex flex-col items-center gap-6 p-8 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <FileArchive className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold">
                  Download All Files (V{CURRENT_VERSION})
                </h3>
                <p className="text-muted-foreground">
                  Download all latest HTML, CSS, JavaScript, TikTok promo, and
                  image files sequentially
                </p>
              </div>
              <Button
                size="lg"
                onClick={handleDownloadAll}
                disabled={downloading !== null}
                className="gap-2 text-base"
                data-ocid="download.primary_button"
              >
                {downloading === "all" ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Downloading Files...
                  </>
                ) : (
                  <>
                    <Download className="h-5 w-5" />
                    Download All Files
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground">
                Files will be downloaded one by one to your default download
                folder
              </p>
            </CardContent>
          </Card>

          <div className="mt-8 rounded-lg border bg-muted/30 p-6">
            <h3 className="mb-3 font-semibold">Deployment Instructions</h3>
            <ol className="space-y-2 text-sm text-muted-foreground">
              <li>1. Download all files using the buttons above</li>
              <li>
                2. Upload to your Hostinger{" "}
                <code className="rounded bg-muted px-1 py-0.5">
                  public_html/smartqr22/
                </code>{" "}
                folder
              </li>
              <li>
                3. Make sure CSS is at{" "}
                <code className="rounded bg-muted px-1 py-0.5">
                  css/index.css
                </code>{" "}
                and JS at{" "}
                <code className="rounded bg-muted px-1 py-0.5">
                  js/index.js
                </code>
              </li>
              <li>4. Use relative paths in your HTML (no leading slash)</li>
              <li>
                5. For the TikTok promo: open{" "}
                <code className="rounded bg-muted px-1 py-0.5">
                  tiktok-promo.html
                </code>{" "}
                in a browser and screen-record it
              </li>
            </ol>
            <div className="mt-4 flex items-start gap-2 rounded-md bg-primary/10 p-3">
              <ExternalLink className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <p className="text-xs text-primary">
                <strong>Version Tracking:</strong> Only the latest version (V
                {CURRENT_VERSION}) of each file is shown. When new updates are
                released, the version number will increment and outdated files
                are automatically removed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
