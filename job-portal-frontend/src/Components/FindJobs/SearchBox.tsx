import { useState } from 'react';
import {PillsInput, Pill, Combobox, CheckIcon, Group, useCombobox, Input} from '@mantine/core';
import {IconSearch, IconSelector} from "@tabler/icons-react";

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

const MAX_DISPLAYED_VALUES = 1;

const SearchBox= () => {
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
    });

    const [search, setSearch] = useState('');
    const [value, setValue] = useState<string[]>([]);

    const handleValueSelect = (val: string) =>
        setValue((current) =>
            current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
        );

    const handleValueRemove = (val: string) =>
        setValue((current) => current.filter((v) => v !== val));

    const values = value.map((item) => (
        <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
            {item}
        </Pill>
    ));

    const options = groceries
        .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
        .map((item) => (
            <Combobox.Option value={item} key={item} active={value.includes(item)}>
                <Group gap="sm">
                    {value.includes(item) ? <CheckIcon size={12} /> : null}
                    <span>{item}</span>
                </Group>
            </Combobox.Option>
        ));

    return (
        <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
            <Combobox.DropdownTarget>
                <PillsInput
                    onClick={() => combobox.openDropdown()}
                    variant={'unstyled'}
                    rightSection={<IconSelector />}
                    leftSection={<IconSearch />}
                >
                    <Pill.Group>
                        {values.length > 0 ? (
                            <>
                                {values}
                                {values.length > MAX_DISPLAYED_VALUES && (
                                    <Pill>
                                        +{values.length - MAX_DISPLAYED_VALUES} more
                                    </Pill>
                                )}
                            </>
                            ): (
                            <Input.Placeholder>Pick one or more values</Input.Placeholder>
                        )}


                    </Pill.Group>
                </PillsInput>
            </Combobox.DropdownTarget>

            <Combobox.Dropdown>
                <Combobox.Options>
                    {options.length > 0 ? options : <Combobox.Empty>Nothing found...</Combobox.Empty>}
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
}

export default SearchBox;