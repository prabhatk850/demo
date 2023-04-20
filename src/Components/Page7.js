import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
padding: 30px;
`;
const P = styled.div``;
const A = styled.div``;
const B = styled.div``;
const P1 = styled.div``;
const C = styled.button`

`;
const D = styled.img`
height: 150px;
width: 400px;
`;
const E = styled.div`
font-size:20px;
`;

function Page7() {
  return (
    <div>
        
        <Container>
            <P>
                <A>WHAT WE THINK</A>
                <B>Our perspective</B>
            </P>
            <P1>
                <C>←</C>
                <C>→</C>
            </P1>
        </Container>
        <Container>
            <P>
                <D src="https://www.coforge.com/hubfs/Banking%20and%20Financial%20Services-2.webp"/>
                <E>Top 5 Techhonology Trends in 2023 in the Banking and Financial Services industry </E>
            </P>
            <P>
                <D src="https://www.coforge.com/hubfs/Metaverse-op-2.jpg"></D>
                <E>How Metaverse can shape the future travle experience</E>
            </P>
        </Container>
    </div>
  )
}

export default Page7