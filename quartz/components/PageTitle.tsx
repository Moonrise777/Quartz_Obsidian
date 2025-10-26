import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { useState, useEffect } from "react"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  // --- INICIO: CÓDIGO AÑADIDO ---
  // Estado para saber si el panel está oculto
  const [explorerHidden, setExplorerHidden] = useState(false)

  // "Efecto" que se ejecuta cuando 'explorerHidden' cambia
  useEffect(() => {
    // Encontramos los paneles izquierdo y central "a la fuerza"
    const left = document.querySelector(".left") as HTMLElement
    const center = document.querySelector(".center") as HTMLElement

    if (left && center) {
      if (explorerHidden) {
        // Ocultar el panel
        left.classList.add("explorer-hidden")
      } else {
        // Mostrar el panel
        left.classList.remove("explorer-hidden")
      }
    }

    // El [explorerHidden] significa "ejecuta esto solo si explorerHidden cambia"
  }, [explorerHidden])
  // --- FIN: CÓDIGO AÑADIDO ---


    return (
    <h2 className={classNames(displayClass, "page-title")}>
      
      {/* --- INICIO: Botón Toggle --- */}
      <span 
        className="explorer-toggle" 
        onClick={() => setExplorerHidden(!explorerHidden)}
        title={explorerHidden ? "Mostrar panel" : "Ocultar panel"}
      >
        {explorerHidden ? "≫" : "≪"}
      </span>
      {/* --- FIN: Botón Toggle --- */}

      <a href={baseDir}>{title}</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
