export enum __TEMPLATE__Enum {
	__EXAMPLE__ = "__EXAMPLE__",
}

export interface __TEMPLATE__ {
	enumerator: () => __TEMPLATE__Enum;
	name: () => string;
}

export type __TEMPLATE__FactoryType = {
	[key in __TEMPLATE__Enum]: __TEMPLATE__;
};

export const __TEMPLATE__Factory: __TEMPLATE__FactoryType = {
	[__TEMPLATE__Enum.__EXAMPLE__]: {
		enumerator: () => __TEMPLATE__Enum.__EXAMPLE__,
		name: () => "Example",
	},
};
