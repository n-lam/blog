import React from "react"
import { Disqus } from "gatsby-plugin-disqus"

export const Comments = ({ url, id, title }) => {
  /* Page contents */
  const disqusConfig = {
    /* Replace PAGE_URL with your post's canonical URL variable */
    url,
    /* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
    identifier: id,
    /* Replace PAGE_TITLE with the title of the page */
    title,
  }
  return <Disqus config={disqusConfig} />
}
