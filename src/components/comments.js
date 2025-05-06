import React from "react"
import { Disqus } from "gatsby-plugin-disqus"

export const Comments = ({ id }) => {
  /* Page contents */
  const disqusConfig = {
    /* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
    identifier: id,
  }

  console.log('debug', disqusConfig);
  
  return <Disqus config={disqusConfig} />
}
