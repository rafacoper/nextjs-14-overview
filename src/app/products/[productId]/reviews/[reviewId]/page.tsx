import { notFound } from "next/navigation"

export default function ProductDetails({ params }: {
  params: { reviewId: string, productId: string }
}) {
  if (parseInt(params.reviewId) > 1001) {
    notFound()
  }
  return (
    <div>
      <h1>Review {params.reviewId} for product {params.productId}</h1>
    </div>
  )
}
