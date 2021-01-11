import React from 'react';

import Button from '../../UserInterface/Buttons/Button/Button';



function ConsoleOpenActivList(props) {

    return (
        <>
            <div>
                Открыта страница<span>{props.numberActivList}</span> из <span>{props.counterPages}</span>
            </div>
            <div>
                <div>
                    {
                        props.counterPages > 3 && props.activArrNumberPages[0]!==1 ?
                            <>
                                <Button
                                    onclick={props.onclickChangeButtonConsole}
                                    data={1}
                                    tabindex='-1'
                                    icon="fa fa-step-backward"
                                />
                                <Button
                                    onclick={props.onclickChangeButtonConsole}
                                    data='left'
                                    tabindex='-1'
                                    icon="fa fa-caret-left"

                                />
                            </>
                            : null
                    }
                </div>
                <div>
                    {
                        props.activArrNumberPages.map((num, index) => {
                            return <Button
                                onclick={props.onclickOpenPagesTable}
                                tabindex='-1'
                                name={num}
                                data={num}
                                key={index}
                            />
                        })
                    }
                </div>
                <div>
                    {
                        props.counterPages > 3 && props.activArrNumberPages[2] < props.counterPages ?
                            <>
                                <Button
                                    onclick={props.onclickChangeButtonConsole}
                                    data='right'
                                    tabindex='-1'
                                    icon="fa fa-caret-right"

                                />
                                <Button
                                    onclick={props.onclickChangeButtonConsole}
                                    data={props.counterPages}
                                    tabindex='-1'
                                    icon="fa fa-step-forward"

                                />
                            </>
                            : null
                    }
                </div>
            </div>
        </>
    )
}

export default ConsoleOpenActivList