import React, { useMemo } from 'react'
import { ClusterDatum } from 'src/io/getClusters'

import styled from 'styled-components'

const VariantTitleWrapper = styled.header`
  text-align: center;
  min-height: 90px;
`

const ClusterNameTitle = styled.h1``

const ClusterNameSubtitle = styled.p`
  margin-bottom: 0;
  text-align: center;
`

export interface VariantTitleProps {
  cluster?: ClusterDatum
}

export function VariantTitle({ cluster }: VariantTitleProps) {
  const subtitle = useMemo(() => {
    if (!cluster?.alt_display_name || cluster?.alt_display_name?.length === 0) {
      return null
    }

    return (
      <ClusterNameSubtitle>
        {`also known as `}
        {cluster.alt_display_name.join(', ')}
      </ClusterNameSubtitle>
    )
  }, [cluster?.alt_display_name])

  return (
    <VariantTitleWrapper>
      <ClusterNameTitle>{cluster?.display_name && `Variant: ${cluster?.display_name}`}</ClusterNameTitle>
      {subtitle}
    </VariantTitleWrapper>
  )
}
