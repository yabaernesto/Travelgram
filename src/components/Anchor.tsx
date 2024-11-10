interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url: string
  children: React.ReactNode
}

export function Anchor({ url, children, ...props }: AnchorProps) {
  return (
    <a href={url} {...props}>
      {children}
    </a>
  )
}
