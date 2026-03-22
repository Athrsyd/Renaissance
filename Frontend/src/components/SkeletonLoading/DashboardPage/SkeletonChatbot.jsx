import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const SkeletonChatbot = () => {

    return (
        <div className='mt-20 '>
            <Skeleton height={400} width={900} style={{borderRadius:'1rem'}} />
        </div>
    )
}

export default SkeletonChatbot