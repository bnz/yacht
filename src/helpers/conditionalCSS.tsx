import { CSSProperties } from 'react'
import { CreateCSSProperties } from '@material-ui/core/styles/withStyles'

type ConditionalCSS = (
  params: Array<[boolean | undefined, CSSProperties | undefined | {}]
    | CSSProperties
    | {}>,
) => CreateCSSProperties | {}

export const conditionalCSS: ConditionalCSS = (params) => {
  let returnObject: CSSProperties | {} = {}

  params.forEach((param) => {
    if (Array.isArray(param)) {
      const [condition, css] = param
      if (condition) {
        returnObject = { ...returnObject, ...css }
      }
    } else {
      returnObject = { ...returnObject, ...param }
    }
  })

  return returnObject
}
