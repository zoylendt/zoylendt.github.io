import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div>
        <div id="links-header">
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Brain/Color/brain_color.svg"></img>
            <a href="/Braindump">Brain</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Keyboard/Color/keyboard_color.svg"></img>
            <a href="/Coding">Code</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Beer%20mug/Color/beer_mug_color.svg"></img>
            <a href="/Brewing">Brew</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Atom%20symbol/Color/atom_symbol_color.svg"></img>
            <a href="/Physics">Physics</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Open%20book/Color/open_book_color.svg"></img>
            <a href="/Media">Media</a>
          </span>
          <span>
            <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Spouting%20whale/Color/spouting_whale_color.svg"></img>
            <a href="/Selfhosted">Selfhosted</a>
          </span>
        </div>
      <hr style="background-color: var(--gray); border-top: 1px var(--gray) solid; margin-top: 1.3rem"></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor
