import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function FancySpacer({}: QuartzComponentProps) {
    return (
      <div style={{
        textAlign: "center",
        fontSize: "1.2em",
        margin: "2em 0",
        color: "var(--secondary)",
      }}>
        ─── ✦ʚ♡ɞ✦ ───
      </div>
    )
  }

  return FancySpacer
}) satisfies QuartzComponentConstructor
