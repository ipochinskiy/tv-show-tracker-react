import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ShowItemCompact from './ShowItemCompact';

describe('Component: ShowItemCompact', () => {
    let props;

    describe('with a normal show item', () => {
        beforeEach(() => {
            props = {
                showItem: createShowItem(),
            };
        });

        it('should render the banner', () => {
            const component = shallow(<ShowItemCompact {...props} />);

            expect(component.find('img').first().props()).toMatchObject({
                src: 'http://thetvdb.com/banners/path/to/banner',
                alt: 'The Big Bang Theory',
            });
        });

        it('should render the show name', () => {
            const component = shallow(<ShowItemCompact {...props} />);

            expect(component).toIncludeText('The Big Bang Theory');
        });

        it('should render the first airing date', () => {
            const component = shallow(<ShowItemCompact {...props} />);
            const date = new Date(props.showItem.firstAired).toLocaleDateString();

            expect(component).toIncludeText(`First airing date: ${date}`);
        });

        it('should render the show status', () => {
            const component = shallow(<ShowItemCompact {...props} />);

            expect(component).toIncludeText('Airing status: Ended');
        });

        it('should render the show description', () => {
            const component = shallow(<ShowItemCompact {...props} />);

            expect(component).toIncludeText('Best scientific show ever');
        });
    });

    describe('with a show item without banner', () => {
        beforeEach(() => {
            props = {
                showItem: createShowItem({
                    banner: undefined,
                }),
            };
        });

        it('should render no img element', () => {
            const component = shallow(<ShowItemCompact {...props} />);

            expect(component.find('img').length).toBe(0);
        });
    });

    describe('with a show item without first airing date', () => {
        beforeEach(() => {
            props = {
                showItem: createShowItem({
                    firstAired: undefined,
                }),
            };
        });

        it('should render the default value for the first airing date', () => {
            const component = shallow(<ShowItemCompact {...props} />);

            expect(component).toIncludeText(`First airing date: n/a`);
        });
    });

    describe('with a show item with invalid first airing date', () => {
        beforeEach(() => {
            props = {
                showItem: createShowItem({
                    firstAired: 'bazzinga!',
                }),
            };
        });

        it('should render the default value for the first airing date', () => {
            const component = shallow(<ShowItemCompact {...props} />);

            expect(component).toIncludeText(`First airing date: n/a`);
        });
    });

    describe('with a show item without airing status', () => {
        beforeEach(() => {
            props = {
                showItem: createShowItem({
                    status: undefined,
                }),
            };
        });

        it('should render the default value for the airing status', () => {
            const component = shallow(<ShowItemCompact {...props} />);

            expect(component).toIncludeText(`Airing status: n/a`);
        });
    });

    describe('with a show item with a long description', () => {
        beforeEach(() => {
            props = {
                showItem: createShowItem({
                    overview: Array(20).fill('bazzinga!!').join(''),
                }),
            };
        });

        it('should render the first 140 characters of the description', () => {
            const component = shallow(<ShowItemCompact {...props} />);
            const description = Array(14).fill('bazzinga!!').join('');

            expect(component).toIncludeText(description);
            expect(component).not.toIncludeText(description + 'b');
        });
    });
});

function createShowItem(options = {}) {
    return {
        id: 'tbbt',
        banner: 'path/to/banner',
        seriesName: 'The Big Bang Theory',
        firstAired: '2014-11-05',
        status: 'Ended',
        overview: 'Best scientific show ever',
        ...options,
    };
}
