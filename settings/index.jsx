function mySettings(props) {
  return (
    <Page>
      <Section
        title={
          <Text bold align="center">
            PILL-POPPER SETTINGS
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
            { color: "magenta" },
            { color: "midnightblue" }
          ]}
        />
      </Section>
      <Section
        title={
          <Text align="center" bold>
            ADD MEDICATIONS
          </Text>
        }
      >
        <AdditiveList
          settingsKey="med_items"
          maxItems="50"
          addAction={
            <TextInput
              label="Add Medication Name and Dosage"
              placeholder="Add Item"
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