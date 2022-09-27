import moduleClass from "./ErrorModal.module.css";
import { VscChromeClose } from "react-icons/vsc";

export default function ErrorModal({ errorHandler, errorTitle, errorMessage }) {
	return (
		<div>
			<div className={moduleClass.modal} onClick={errorHandler}></div>
			<div className={moduleClass.modal_box}>
				<div className={moduleClass.modal_header}>
					<h4>{errorTitle}</h4>
					<VscChromeClose
						size="1.5rem"
						className={moduleClass.closeBtn}
						onClick={errorHandler}
					/>
				</div>
				<div className={moduleClass.modal_content}>{errorMessage}</div>
			</div>
		</div>
	);
}
