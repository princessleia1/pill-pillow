function mySettings(props) {
  return (
    <Page>
      <Section
        title={
          <Text bold align="center">
            TODO-Face Settings
          </Text>
        }
      >
        <Text>Select Colour Scheme:</Text>
        <ColorSelect
          settingsKey="color"
          colors={[
            { color: "sandybrown" },
            { color: "tomato" },
            { color: "orangered" },
            { color: "gold" },
            { color: "white" },
            { color: "black" },
            { color: "plum" },
            { color: "purple" },
            { color: "deepskyblue" },
            { color: "dodgerblue" },
            { color: "midnightblue" }
          ]}
        />
      </Section>
      <Section
        description={<Text>Maximum 50 TODO Entries.</Text>}
        title={
          <Text align="center" bold>
            TODO-FACE
          </Text>
        }
      >
        <AdditiveList
          settingsKey="todo_items"
          maxItems="50"
          addAction={
            <TextInput
              label="Add To Do Item Entry"
              placeholder="Add To Do Item"
              action="Add"
            />
          }
        />
      </Section>
      <Button
        list
        label="Clear Settings Storage"
        onClick={() => props.settingsStorage.clear()}
      />
    </Page>
  );
}

registerSettingsPage(mySettings);
