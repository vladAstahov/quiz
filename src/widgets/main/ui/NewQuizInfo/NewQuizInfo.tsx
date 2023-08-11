"use client";

import React, {useState} from "react";
import styles from './NewQuizInfo.module.scss'
import { InfoRow } from "@/shared/ui/InfoRow";
import { PropsDefault } from "@/shared/types/helpers";
import { Button } from "@/shared/ui/Button";
import {Modal} from "@/shared/ui/Modal";

export const NewQuizInfo = React.memo<PropsDefault & React.PropsWithChildren>(({ className, children }) => {
    const [ isVisible, setIsVisible ] = useState(false)

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Умничать выгодно</h1>
                <p className={styles.description}>Главный приз и текст , что за приз</p>
                {children}
                <div className={styles.row}>
                    <InfoRow className={styles.info} icon={'placeholder'} text={'02.08.2023'} />
                    <InfoRow className={styles.info} icon={'placeholder'} text={'700'} />
                    <InfoRow className={styles.info} icon={'placeholder'} text={'12:00'} />
                    <InfoRow className={styles.info} icon={'placeholder'} text={'Участников: 12'} />
                </div>
                <div className={styles.buttons}>
                    <Button
                        view="secondary"
                        ariaLabel="Ввести промокод"
                        onPress={() => setIsVisible(true)}>
                        Ввести промокод
                    </Button>
                    <Button ariaLabel="Оплатить" onPress={() => { }}>Оплатить</Button>
                </div>
            </div>
            <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
                <h1>Content</h1>
            </Modal>
        </>
    )
})