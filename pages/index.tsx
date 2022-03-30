import { Layout, Page, Text, Link, List } from '@vercel/examples-ui'

export default function Index() {
  return (
    <Page>
      <Text variant="h1" className="mb-6">
        AB testing with Statsig
      </Text>
      <Text className="mb-4">
        In this demo we use Statsig's Edge SDK to pull experiment variant and
        show the resulting allocation.  As you change the user-id you will see
        the variant assignment change, but as long as the user-id is constant,
        the variant assignment will be sticky.
      </Text>
      <List>
        <li>
          <Link href="/home">/home</Link>
        </li>
      </List>
    </Page>
  )
}

Index.Layout = Layout
