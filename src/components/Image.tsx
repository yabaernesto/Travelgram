interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  url: string
}

export function Avatar({ url, alt, ...props }: AvatarProps) {
  return <img src={url} alt={alt} {...props} />
}
