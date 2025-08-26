const isAdmin = true;
const isVerifiedUser = false;
const hasSpecialPermission = true;
const hasTemporaryPass = false;

const isAccess = (isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass);