interface AvatarProps {
  url: string
  alt?: string
  className?: string
}

export function Avatar({ url, alt, className }: AvatarProps) {
  return <img src={url} alt={alt} className={className} />
}
