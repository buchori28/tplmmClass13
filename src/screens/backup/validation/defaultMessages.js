'use strict';

const defaultMessages = {
    en: {
      numbers: 'The field "{0}" must be a valid number.',
      name: 'Name of "{0}" must use alphabet only',
      email: 'The field "{0}" must be a valid email address.',
      required: 'The field "{0}" is mandatory.',
      date: 'The field "{0}" must be a valid date ({1}).',
      minlength: 'The field "{0}" length must be greater than {1}.',
      maxlength: 'The field "{0}" length must be lower than {1}.'
    },
    id: {
      numbers: '"{0}" harus berupa angka',
      name: 'Nama dari "{0}" harus huruf saja',
      email: 'Format email pada "{0}" harus valid',
      required: '"{0}" harus diisi',
      date: 'Format tanggal pada "{0}" harus ({1})',
      minlength: '"{0}" harus lebih dari {1} karakter',
      maxlength: '"{0}" harus kurang dari {1} karakter'
    },
};

export default defaultMessages;