import { CSSProperties } from 'react'
import { CreateCSSProperties } from '@material-ui/core/styles/withStyles'

// type Styled2 = <Component extends ElementType>(component: Component) => ComponentCreator<Component>
// const styled2: Styled2 = (component) => {}
// styled2('div')


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
