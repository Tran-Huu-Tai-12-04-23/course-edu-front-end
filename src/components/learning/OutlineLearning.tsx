import { Accordion, AccordionItem } from '@nextui-org/react';

function OutlineLearning() {
    const defaultContent =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    return (
        <div
            style={{
                height: 'calc(100vh - 10rem)',
            }}
            className="scroll-custom overflow-auto max-w-[30rem] w-[30rem] border-l-[1px] border-solid dark:border-gray-900"
        >
            <Accordion className="max-w-[30rem] p-0 m-0 px-0">
                <AccordionItem
                    className="p-2"
                    key="1"
                    aria-label="Accordion 1"
                    subtitle="Press to expand"
                    title="Accordion 1"
                >
                    {defaultContent}
                </AccordionItem>
                <AccordionItem
                    key="2"
                    className="p-2"
                    aria-label="Accordion 2"
                    subtitle={
                        <span>
                            Press to expand <strong>key 2</strong>
                        </span>
                    }
                    title="Accordion 2"
                >
                    {defaultContent}
                </AccordionItem>
                <AccordionItem
                    className="p-2"
                    key="3"
                    aria-label="Accordion 3"
                    subtitle="Press to expand"
                    title="Accordion 3"
                >
                    {defaultContent}
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default OutlineLearning;
