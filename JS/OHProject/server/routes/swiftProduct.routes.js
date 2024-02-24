import router from 'express'
const router = Router()
router.route("/swiftyProducts")
    .get()
    .post()

    router
        .route("/swiftyproduct/:id")
        .get()
        .put()
        .delete()


        export default router
