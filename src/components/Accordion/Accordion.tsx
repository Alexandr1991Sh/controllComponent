import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (collapsed: boolean)=>void
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

        return <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed} />
            {!props.collapsed && <AccordionBody/> }
        </div>

}

type AccordionTitlePropsType = {
    title: string
    onClick: any
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    const onClickHandler = ()=>{
        props.onClick(!props.collapsed)
    }
    return <h3 onClick={onClickHandler}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;