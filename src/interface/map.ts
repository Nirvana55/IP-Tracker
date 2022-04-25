export interface UserIP {
	ip: string;
	location: Location;
	as: As;
	isp: string;
}

interface As {
	asn: number;
	name: string;
	route: string;
	domain: string;
	type: string;
}

interface Location {
	country: string;
	region: string;
	timezone: string;
}

export interface UserKey {
	apiKey?: string;
}
