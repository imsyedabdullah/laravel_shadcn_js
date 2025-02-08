import React, { useEffect, useState } from "react";


export default function IconComponent({ iconName }) {

	const [IconComponentState, setIconComponentState] = useState("");

	const loadIcon = async () => {
		try {
			const { [iconName]: Icon } = await import("lucide-react");
			return Icon;
		} catch {
			throw new Error(`Icon "${iconName}" not found in c-react`);
		}
	};

	useEffect(() => {
		loadIcon()
			.then((Icon) => setIconComponentState(() => Icon))
			.catch((error) => console.error(error));
	}, []);

	if(!IconComponentState){
		return <></>
	}

	return <IconComponentState />;
}
