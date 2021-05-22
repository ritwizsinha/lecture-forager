import { createBullBoard } from 'bull-board';
import { BullAdapter } from 'bull-board/bullAdapter';
import { S3VideoUploadQueue } from './init';
const {
    router,
    setQueues,
    replaceQueues,
    addQueue,
    removeQueue
} = createBullBoard([
    new BullAdapter(S3VideoUploadQueue),
])

export {
    router as bullRouter
}