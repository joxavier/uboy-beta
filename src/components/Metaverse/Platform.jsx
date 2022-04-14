import {MetaverseCard, MetaverseIcon, MetaverseH2} from './MetaverseElements'

const Platform = ({ platform, link, img}) => {

    return (
        <MetaverseCard onClick={()=>{ window.open(link) }}>
            <MetaverseIcon src={img} />
            <MetaverseH2>{platform}</MetaverseH2>
        </MetaverseCard>
    )
}

export default Platform