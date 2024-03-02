import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"
import { Grid, Flex, View, Button, TextField } from "@adobe/react-spectrum"

const App = () => {
  return (
    <>
      {/* <Button variant="accent" onPress={() => alert("Hey there!")}>
        Hello React Spectrum!
      </Button>
      <Flex direction="column" width="size-2000" gap="size-100">
        <View backgroundColor="celery-600" height="size-800" />
        <View backgroundColor="blue-600" height="size-800" />
        <View backgroundColor="magenta-600" height="size-800" />
      </Flex>
      <View
        borderWidth="thin"
        borderColor="dark"
        borderRadius="medium"
        padding="size-250"
      >
        <TextField label="Name" />
      </View> */}
      <Grid
        areas={["header  header", "sidebar content", "footer  footer"]}
        columns={["1fr", "3fr"]}
        rows={["size-1000", "size-6000", "size-1000"]}
        height="100%"
        gap="size-100"
      >
        <View backgroundColor="celery-600" gridArea="header" />
        <View backgroundColor="blue-600" gridArea="sidebar" />
        <View backgroundColor="purple-600" gridArea="content">
          <Counter />
        </View>
        <View backgroundColor="magenta-600" gridArea="footer" />
      </Grid>
    </>
  )
}

export default App
