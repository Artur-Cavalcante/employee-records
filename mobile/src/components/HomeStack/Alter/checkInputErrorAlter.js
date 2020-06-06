import validateCpf from '../../../utils/validateCpf';

export default function checkInputErrorAlter(params) {
    params.setErrorNameText(null);
    params.setErrorCpfText(null);
    params.setErrorAddressText(null);
    params.setErrorDateOfBirthText(null);
    params.setErrorActiveText(null);
    params.setErrorContractDate(null);
    params.setErrorNumberPhoneText(null);
    params.setErrorOccupationText(null);
    params.setErrorSalaryText(null);
    params.setErrorSectorText(null);

    const fields = [
        params.nameText,
        params.cpfText,
        params.addressText,
        params.dateOfBirthText,
        params.activeText,
        params.contractDate,
        params.numberPhoneText,
        params.occupationText,
        params.salaryText,
        params.sectorText,
    ];
    const errorsFields = [
        params.setErrorNameText,
        params.setErrorCpfText,
        params.setErrorAddressText,
        params.setErrorDateOfBirthText,
        params.setErrorActiveText,
        params.setErrorContractDate,
        params.setErrorNumberPhoneText,
        params.setErrorOccupationText,
        params.setErrorSalaryText,
        params.setErrorSectorText,
    ];

    for (let i = 0; i < fields.length; i++) {
        if (fields[i] === null) {
            errorsFields[i]('Field Required');
            return false;
        };

        switch (i) {
            case 1:
                if (!(validateCpf(fields[1]))) {
                    errorsFields[1]('Type a valid cpf');
                    return false;
                }
                break;
            case 3:
                if (fields[3].length < 10) {
                    errorsFields[3]('Type a valid date');
                    return false;
                }
                break;
            case 5:
                if (fields[5].length < 10) {
                    errorsFields[5]('Type a valid date');
                    return false;
                }
                break;
            case 6:
                if (fields[6].length < 15) {
                    errorsFields[6]('Type a valid number phone');
                    return false;
                }
                break;
            default:
                break;
        }
    }

    return true;
};
