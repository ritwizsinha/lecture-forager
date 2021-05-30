import { createBullBoard } from 'bull-board';
import { BullAdapter } from 'bull-board/bullAdapter';
import { S3VideoUploadQueue, videoToAudioConversionQueue, S3AudioUploadQueue, VideoThumbnailQueue, PullTranscriptionsQueue } from './init';
const {
    router,
    setQueues,
    replaceQueues,
    addQueue,
    removeQueue
} = createBullBoard([
    new BullAdapter(S3VideoUploadQueue),
    new BullAdapter(videoToAudioConversionQueue),
    new BullAdapter(S3AudioUploadQueue),
    new BullAdapter(VideoThumbnailQueue),
    new BullAdapter(PullTranscriptionsQueue),
])

export {
    router as bullRouter
}