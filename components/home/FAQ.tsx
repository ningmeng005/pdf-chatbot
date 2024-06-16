"use client";
import {ALL_FAQS} from "@/config/faqs";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {PlusIcon} from "lucide-react";
import {RoughNotation} from "react-rough-notation";

// update rough notation highlight
function triggerResizeEvent() {
    const event = new Event("resize");
    window.dispatchEvent(event);
}

const FAQ = ({
                 id,
                 locale,
                 langName,
             }: {
    id: string;
    locale: any;
    langName: string;
}) => {
    const FAQS = ALL_FAQS[`FAQS_${langName.toUpperCase()}`];

    return (
        <section id={id} className="flex flex-col justify-center bg-faq pb-0 pt-5 items-center">
            <div className="container">

                <div className="flex justify-center">
                    <div className="col-lg-7">
                        <div className="title-box text-center">
                            <h5 className="sub-title text-primary f-13 text-uppercase">PDF AI CHATBOT -- FAQ</h5>
                            <h2 className="text-[38px] mt-2">Frequently Asked Questions</h2>
                            <p className="title-desc text-muted mt-3">We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with faucibus sapien odio measurable results.</p>
                        </div>
                    </div>
                </div>

                <Accordion
                    fullWidth
                    keepContentMounted
                    className="mt-[60px] gap-3"
                    itemClasses={{
                        base: "px-6 !bg-default-100 !shadow-none hover:!bg-default-200/50",
                        title: "font-medium",
                        trigger: "py-6",
                        content: "pt-0 pb-6 text-base text-default-500",
                    }}
                    items={FAQS}
                    selectionMode="multiple"
                    variant="splitted"
                    onSelectionChange={triggerResizeEvent}
                >
                    {FAQS?.map((item) => (
                        <AccordionItem
                            key={item.title}
                            indicator={<PlusIcon/>}
                            title={item.title}
                        >
                            {item.content}
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
                {/*<div className="flex flex-col text-center gap-4">*/}
                {/*    <h2 className="text-center text-white">*/}
                {/*        <RoughNotation type="highlight" show={true} color="#2563EB">*/}
                {/*            {locale.title}*/}
                {/*        </RoughNotation>*/}
                {/*    </h2>*/}
                {/*    <p className="text-large text-default-500">{locale.description}</p>*/}
                {/*</div>*/}
                
        </section>
);
};

export default FAQ;
