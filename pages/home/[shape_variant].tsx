import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { Layout, Page, Text, Button } from '@vercel/examples-ui'

export default function Home() {
  const router = useRouter()
  const shapeVariant = router.query.shape_variant as string

  const removeUserCookie = () => {
    Cookies.remove('uid');
    router.reload();
  }

  return (
    <Page>
      <Text variant="h2" className="mb-6">
        Home page variant
      </Text>
      <Text className="text-lg mb-4">
        You&apos;re currently on experiment variant <b>{shapeVariant}</b>
      </Text>
      <Text className="mb-4">
        You can use the button below to change your user id and see the assigned
        variant update:
      </Text>
      <Button variant="black" onClick={() => removeUserCookie()}>
        Reassign User ID
      </Button>
    </Page>
  )
}

Home.Layout = Layout

