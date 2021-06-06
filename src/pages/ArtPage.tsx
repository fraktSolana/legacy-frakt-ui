import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import AppLayout from '../components/AppLayout'
import Button from '../components/Button'
import styles from './ArtPage.module.scss'
import { shortenAddress } from '../utils/utils'
import { URLS } from '../constants'
import { getMintedArtData } from '../mocks/mock_functions'
import { COLOR, getArtName, SHAPE } from '../components/ArtCard'
import MOCK_IMAGE from '../mocks/images/Portal.png'
import { useArts } from '../contexts/artDetails'
import { ipfsUriToGatewayUrl } from '../utils/ipfs'
import { PublicKey } from '@solana/web3.js'
import Preloader from '../components/Preloader'

const ArtInfo = ({
  owner,
  figure,
  color,
  rarity,
  lambda,
  mu,
  circles,
  distortion,
}: any) => {
  return (
    <div className={styles.info}>
      <div>
        <p>Owner</p>
        <p>
          {owner ? (
            <Link to={`${URLS.USER}/${owner}`} className={styles.infoLink}>{shortenAddress(owner)}</Link>
          ) : (
            'Loading...'
          )}
        </p>
      </div>
      <div>
        <p>Figure</p>
        <p>{figure}</p>
      </div>
      <div>
        <p>Color</p>
        <p>{color}</p>
      </div>
      <div>
        <p>Rarity</p>
        <p>{rarity}</p>
      </div>
      <div>
        <p>λ</p>
        <p>{lambda}</p>
      </div>
      <div>
        <p>μ</p>
        <p>{mu}</p>
      </div>
      <div>
        <p>Circles</p>
        <p>{circles}</p>
      </div>
      <div>
        <p>Distortion</p>
        <p>{distortion}</p>
      </div>
    </div>
  )
}

const ArtPage = (props: any) => {
  const { artAccountPubkey } = useParams<{ artAccountPubkey: string }>()
  const history = useHistory()
  const { arts, getArts, getArtOwner } = useArts()
  const [loadingImage, setLoadingImage] = useState(true)
  const [imageSrc, setImageSrc] = useState(null)
  const [art, setArt] = useState({
    attributes: null,
    metadata: null,
    rarity: 0,
  })
  const [ownerAddress, setOwnerAddress] = useState(null)
  const [loadingOwnerAddress, setLoadingOwnerAddress] = useState(false)

  const loadImage = async (image_url) => {
    setLoadingImage(true)
    const token = await (await fetch(ipfsUriToGatewayUrl(image_url))).json()
    setImageSrc(ipfsUriToGatewayUrl(token.image))
    setLoadingImage(false)
  }

  const loadOwnerAddress = async (art) => {
    setLoadingOwnerAddress(true)
    const ownerAddress: PublicKey = await getArtOwner(
      new PublicKey(art.metadata.minted_token_pubkey)
    )
    console.log({ ownerAddress })
    setOwnerAddress(`${ownerAddress}`)
    setLoadingOwnerAddress(false)
  }

  const loadArt = async () => {
    const data = arts.find(
      (art) => art.metadata.artAccountPubkey === artAccountPubkey
    )

    if (!data) {
      const arts = await getArts()
      const data = arts.find(
        (art) => art.metadata.artAccountPubkey === artAccountPubkey
      )
      loadOwnerAddress(data)
      loadImage(data.attributes?.image_url)
      return setArt(data)
    }

    loadOwnerAddress(data)
    loadImage(data.attributes?.image_url)
    setArt(data)
  }

  useEffect(() => {
    loadArt()
  }, [artAccountPubkey])

  const ArtHeader = () => (
    <div className={styles.ArtHeader}>
      <Button
        arrowLeft
        className={styles.backButton}
        onClick={() =>
          history.length <= 2 ? history.replace(URLS.ROOT) : history.goBack()
        }
      >
        Back
      </Button>
      <div className={styles.title}>
        {`${
          art.attributes?.color && art.attributes?.shape
            ? getArtName({
                color: art.attributes?.color,
                shape: art.attributes?.shape,
              })
            : ''
        } #${art?.attributes?.art_hash ? art.attributes.art_hash : ''}`}
      </div>
    </div>
  )

  const artInfoData = {
    owner: ownerAddress || null,
    figure: SHAPE[art.attributes?.shape],
    color: COLOR[art.attributes?.color],
    rarity: `${art.rarity.toFixed(2)}%`,
    lambda: art?.attributes?.fractial_iterations,
    mu: 'Calculate it',
    circles: art.attributes?.circles_amount,
    distortion: 'Calculate it',
  }

  return (
    <AppLayout
      CustomHeader={ArtHeader}
      mainClassName={loadingImage ? styles.appLayoutMain : ''}
    >
      <div className={styles.artContainer}>
        {/* TODO: consider d3 animation */}

        {loadingImage ? (
          <div className={styles.preloaderWrapper}>
            <Preloader size='lg' />
          </div>
        ) : (
          <>
            <img
              className={styles.image}
              src={imageSrc || MOCK_IMAGE}
              alt='Art'
            />
            {art.metadata && art.attributes && (
              <ArtInfo
                owner={artInfoData.owner}
                figure={artInfoData.figure}
                color={artInfoData.color}
                rarity={artInfoData.rarity}
                lambda={artInfoData.lambda}
                mu={artInfoData.mu}
                circles={artInfoData.circles}
                distortion={artInfoData.distortion}
              />
            )}
          </>
        )}
      </div>
    </AppLayout>
  )
}

export default ArtPage
