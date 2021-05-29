import { createBullBoard } from 'bull-board';
import { BullAdapter } from 'bull-board/bullAdapter';
import { S3VideoUploadQueue, videoToAudioConversionQueue, S3AudioUploadQueue } from './init';
const {
    router,
    setQueues,
    replaceQueues,
    addQueue,
    removeQueue
} = createBullBoard([
    new BullAdapter(S3VideoUploadQueue),
    new BullAdapter(videoToAudioConversionQueue),
    new BullAdapter(S3AudioUploadQueue)
])

export {
    router as bullRouter
}