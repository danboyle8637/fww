import React from "react"
import { Link } from "gatsby"

import { ElementContainer, ContentContainer } from "../styles/Containers"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ContentContainer>
      <ElementContainer>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras
          semper auctor neque vitae tempus. Tincidunt id aliquet risus feugiat
          in ante. Ultrices neque ornare aenean euismod. Amet facilisis magna
          etiam tempor orci eu lobortis elementum. Et malesuada fames ac turpis
          egestas maecenas pharetra convallis. Et sollicitudin ac orci phasellus
          egestas tellus rutrum. Lectus sit amet est placerat in egestas.
          Ultricies integer quis auctor elit sed. Ac turpis egestas maecenas
          pharetra convallis posuere. Quis viverra nibh cras pulvinar mattis
          nunc sed. Lorem ipsum dolor sit amet. Feugiat in fermentum posuere
          urna nec tincidunt praesent semper feugiat. Dictum sit amet justo
          donec enim. Velit sed ullamcorper morbi tincidunt ornare massa eget
          egestas purus. Non diam phasellus vestibulum lorem. Etiam tempor orci
          eu lobortis. Ullamcorper a lacus vestibulum sed arcu non odio.
          Volutpat est velit egestas dui id ornare arcu odio ut. Elit ut aliquam
          purus sit amet luctus venenatis. Ultricies tristique nulla aliquet
          enim tortor. Ante in nibh mauris cursus. Viverra aliquet eget sit
          amet. Et ultrices neque ornare aenean euismod elementum nisi quis.
          Ipsum consequat nisl vel pretium lectus quam id. At risus viverra
          adipiscing at in tellus integer feugiat scelerisque. At augue eget
          arcu dictum varius duis. Sed risus ultricies tristique nulla aliquet
          enim tortor at auctor. In est ante in nibh. Vestibulum lorem sed risus
          ultricies. Nisl vel pretium lectus quam id leo. Molestie ac feugiat
          sed lectus vestibulum mattis ullamcorper. Diam vulputate ut pharetra
          sit amet aliquam id. Ac turpis egestas integer eget aliquet nibh.
          Magna fermentum iaculis eu non. Aliquam faucibus purus in massa tempor
          nec feugiat nisl pretium. Mi in nulla posuere sollicitudin aliquam
          ultrices sagittis orci a. Viverra maecenas accumsan lacus vel
          facilisis volutpat est. Ultricies mi eget mauris pharetra. Elit at
          imperdiet dui accumsan sit. Et egestas quis ipsum suspendisse ultrices
          gravida dictum. Potenti nullam ac tortor vitae purus faucibus. Tellus
          integer feugiat scelerisque varius morbi. Sed turpis tincidunt id
          aliquet risus feugiat in.
        </p>
        <Link to="/page-2/">Go to page 2</Link>
      </ElementContainer>
    </ContentContainer>
  </>
)

export default IndexPage
