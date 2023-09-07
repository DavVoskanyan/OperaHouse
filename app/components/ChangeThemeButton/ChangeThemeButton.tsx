import {JSX} from "react";
import {classNameGenerator} from "@/app/utils/utils";
import {ChangeThemeButtonProps} from "@/app/utils/types";
import styles from "./ChangeThemeButton.module.css";

export default function ChangeThemeButton({theme, changeTheme}: ChangeThemeButtonProps): JSX.Element {
    return (
        <button
            className={classNameGenerator(styles.changeThemeButton, styles[theme])}
            onClick={(): void => {changeTheme(theme)}} >
        </button>
    );
}