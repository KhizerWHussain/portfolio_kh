import Image from "next/image";
import { ForwardedRef } from "react";

interface customImageProps {
  image: any;
  alt: string;
  loadingEase?: "lazy" | "eager";
  width?: number;
  height?: number;
  // layout?: "fill" | "fixed" | "intrinsic" | "responsive"; // optional
  // objectFit?: "contain" | "cover"; // optional for flexibility
  className?: string; // optional to style with a custom class
  havePriority?: boolean;
  styles?: React.CSSProperties;
  fetchPriority?: "auto" | "high" | "low" | undefined;
  imageLoader?: any;
  imageFill?: boolean;
  imageQuality?: number;
  ClickFunction?: () => void | any;
  blurDataURL?: string;
  sizes?: string;
  optimizeImage?: boolean;
  color?: string | undefined;
  caption?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  title?: string;
  role?: string;
  dataAttributes?: { [key: string]: string };
  ref?: ForwardedRef<HTMLImageElement>;
  captionStyles?: string;
  accessKey?: string;
}

export default function CustomImage({
  image,
  alt,
  loadingEase,
  width = 0,
  height = 0,
  // layout = "intrinsic", // default layout
  // objectFit = "cover",
  className = "", // optional className for styling
  havePriority = false,
  styles,
  fetchPriority,
  imageLoader,
  imageFill,
  imageQuality,
  ClickFunction,
  blurDataURL,
  sizes,
  optimizeImage = false,
  color,
  caption,
  ariaLabelledBy,
  ariaDescribedBy,
  title,
  role,
  dataAttributes = {},
  ref,
  captionStyles,
  accessKey,
}: customImageProps) {
  return (
    <figure>
      <Image
        src={image}
        alt={alt}
        unoptimized={optimizeImage}
        priority={havePriority && loadingEase === "eager" ? true : false}
        suppressContentEditableWarning={true}
        suppressHydrationWarning={true}
        width={width}
        height={height}
        // objectFit={objectFit}
        className={className} // allows passing of custom className
        loading={havePriority && loadingEase === "eager" ? "eager" : "lazy"} // lazy load non-priority images
        about={alt}
        aria-readonly="true"
        aria-required="true"
        style={styles}
        // layout={layout || ""}
        draggable={false}
        fetchPriority={fetchPriority}
        loader={imageLoader || undefined}
        fill={imageFill || undefined}
        quality={imageQuality || undefined}
        onClick={ClickFunction}
        title={alt || title}
        blurDataURL={blurDataURL || undefined}
        sizes={sizes}
        hidden={false}
        aria-label={alt}
        color={color}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        role={role}
        ref={ref}
        accessKey={accessKey}
        {...dataAttributes}
      />
      {caption ? (
        <figcaption className={captionStyles}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}
