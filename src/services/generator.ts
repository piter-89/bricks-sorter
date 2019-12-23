import * as sharedSrv from "./_shared";

export const getRandomBrickElName = () => sharedSrv.elementsEnum[sharedSrv.getRandomInt(0, 3)];