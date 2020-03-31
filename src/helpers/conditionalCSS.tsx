import { CSSProperties } from 'react'
import { CreateCSSProperties } from '@material-ui/core/styles/withStyles'

export type ConditionalCSS = (
  params: Array<[boolean | undefined, CSSProperties | undefined | {}]
    | [boolean | undefined, CSSProperties | undefined | {}, CSSProperties | undefined | {}]
    | CSSProperties
    | {}>,
) => CreateCSSProperties | {}

export const conditionalCSS: ConditionalCSS = (params) => {
  let returnObject: CSSProperties | {} = {}

  params.forEach((param) => {
    if (Array.isArray(param)) {
      const [condition, css, altCss] = param
      if (condition) {
        returnObject = { ...returnObject, ...css }
      } else {
        returnObject = { ...returnObject, ...altCss }
      }
    } else {
      returnObject = { ...returnObject, ...param }
    }
  })

  return returnObject
}
