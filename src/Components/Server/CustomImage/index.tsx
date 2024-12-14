import Image from "next/image";
import { ForwardedRef } from "react";

interface customImageProps {
  image: any;
  alt?: string;
  loadingEase?: "lazy" | "eager";
  width?: number;
  height?: number;
  className?: string; // optional to style with a custom class
  figureClassName?: string;
  havePriority?: boolean;
  styles?: React.CSSProperties;
  fetchPriority?: "auto" | "high" | "low";
  imageLoader?: any;
  imageFill?: boolean;
  imageQuality?: number;
  click?: () => void | any;
  blurDataURL?: string;
  sizes?: string;
  optimize?: boolean;
  color?: string | undefined;
  caption?: string;
  title?: string;
  dataAttributes?: { [key: string]: string };
  ref?: ForwardedRef<HTMLImageElement>;
  captionStyles?: string;
  accessKey?: string;
}

function CustomImage({
  image,
  alt,
  loadingEase,
  width = 0,
  height = 0,
  className = "",
  havePriority = false,
  styles,
  fetchPriority,
  imageLoader,
  imageFill,
  imageQuality,
  click,
  blurDataURL,
  sizes,
  optimize = false,
  color,
  caption,
  title,
  dataAttributes = {},
  ref,
  captionStyles,
  accessKey,
  figureClassName,
}: customImageProps) {
  return (
    <figure className={figureClassName}>
      <Image
        src={image}
        alt={alt || `${image}`}
        unoptimized={optimize}
        priority={havePriority && loadingEase === "eager" ? true : false}
        suppressContentEditableWarning={true}
        suppressHydrationWarning={true}
        width={width}
        height={height}
        className={className}
        loading={havePriority && loadingEase === "eager" ? "eager" : "lazy"} // lazy load non-priority images
        about={alt}
        aria-readonly="true"
        aria-required="true"
        style={styles}
        draggable={false}
        fetchPriority={fetchPriority}
        loader={imageLoader}
        fill={imageFill}
        quality={imageQuality}
        onClick={click}
        title={alt || title}
        blurDataURL={blurDataURL}
        sizes={sizes}
        hidden={false}
        aria-label={alt}
        color={color}
        aria-labelledby={title}
        aria-describedby={alt}
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

export default CustomImage;
