import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import Grid, {GridDataRow} from './Grid';
import {RightSidebar, RightSidebarContext} from '../right-sidebar';
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';

const mockSetConfig = vi.fn();
const mockSetSchema = vi.fn();
const mockSetEvents = vi.fn();

const data: GridDataRow[] = [
    {
        id: 1,
        name: "Hart Hagerty test",
        country: "United States test",
        vendor: {
            company: "Zemlak, Daniel and Leannon test",
            location: "Desktop Support Technician test",
        },
        color: "Purple test",
        image: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    },
    {
        id: 2,
        name: "Brice Swyre test",
        country: "China test",
        vendor: {
            company: "Carroll Group test",
            location: "Tax Accountant test",
        },
        color: "Red test",
        image: "https://img.daisyui.com/images/profile/demo/3@94.webp",
    },
    {
        id: 3,
        name: "Marjy Ferencz test",
        country: "Russia test",
        vendor: {
            company: "Rowe-Schoen test",
            location: "Office Assistant I test",
        },
        color: "Crimson test",
        image: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    },
];

describe('Grid Component', () => {

    beforeEach(() => {
        render(
            <RightSidebarContext.Provider
                value={{
                    config: {isOpen: true},
                    schema: {},
                    setConfig: mockSetConfig,
                    setSchema: mockSetSchema,
                    setEvents: mockSetEvents
                }}>
                <Grid data={data}/>
                <RightSidebar/>
            </RightSidebarContext.Provider>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('should render the correct number of products', () => {
        const rows = screen.getAllByRole('row');
        expect(rows).toHaveLength(data.length + 1); // including header row
    });


    it('should handle "details" button click and open the right sidebar', () => {
        const $detailButtons = screen.getAllByRole('button', {name: /details/i});

        // Click the "details" button for the first product
        fireEvent.click($detailButtons[0]);

        expect(mockSetConfig).toHaveBeenCalledWith({isOpen: true});
        expect(mockSetEvents).toHaveBeenCalledWith({
            onOK: expect.any(Function),
            onCancel: expect.any(Function),
        });
        expect(mockSetSchema).toHaveBeenCalledWith({
            id: {placeholder: '1'},
            name: {
                placeholder: 'Pablo Rios',
                onValueChanged: expect.any(Function),
            },
        });
    });

    it('should display the correct product details', () => {

        for (const item of data) {
            expect(screen.getByText(item.name)).toBeDefined();
            expect(screen.queryByText(item.country)).toBeDefined();
            if (item.vendor) {
                expect(screen.queryByText(item.vendor.company)).toBeDefined();
                expect(screen.queryByText(item.vendor.location)).toBeDefined();
            }
            expect(screen.queryByText(item.color)).toBeDefined();
        }
    });
});
