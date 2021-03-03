(function($, window, document, undefined) {
	$(function() {
        var $form = $('#detailsForm');
        var $fields = $('.field');
        var $fieldValues = $('.field-value');
        // Specific fields
        var $name = $('#name');
        var $email = $('#email');
        var $contact = $('#contact');
        var $gender = $('#gender');
        var $notes = $('#notes');
        // Field errors
        var $nameRequired = $('#nameRequired');
        var $emailRequired = $('#emailRequired');
        var $emailInvalid = $('#emailInvalid');
        var $contactRequired = $('#contactRequired');
        var $contactInvalid = $('#contactInvalid');
        var $genderRequired = $('#genderRequired');
        var $notesRequired = $('#notesRequired');
        // Regexes
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var contactRegex = /^\d{8,12}$/;
        // Form actions
        var $edit = $('#edit');
        var $submit = $('#submit');

        $('#edit').on('click', function(e) {
            e.preventDefault();
            showEditableForm();
        });

		$('#detailsForm').on('submit', function(e) {
            e.preventDefault();
            if(formIsValid()) {
                hideEditableForm();
                updateFormValues();
            }
        });

        $name.on('input', nameIsValid);
        $email.on('input', emailIsValid);
        $contact.on('input', contactIsValid);
        $gender.on('change', genderIsValid);
        $notes.on('input', notesIsValid);

        function showEditableForm() {
            $fields.css('display', '');
            $submit.css('display', '');
            $fieldValues.css('display', 'none');
            $edit.css('display', 'none');
        }

        function hideEditableForm() {
            $fields.css('display', 'none');
            $submit.css('display', 'none');
            $fieldValues.css('display', '');
            $edit.css('display', '');
        }

        function formIsValid() {
            var formValidity = [
                    nameIsValid(),
                    emailIsValid(),
                    contactIsValid(),
                    genderIsValid(),
                    notesIsValid()
                ];

            return formValidity.indexOf(false) < 0;
        }

        function nameIsValid() {
            if($name.val() === '') {
                $name.addClass('invalid--');
                $nameRequired.addClass('active--');
                return false;
            } else {
                $name.removeClass('invalid--');
                $nameRequired.removeClass('active--');
                return true;
            }
        }

        function emailIsValid() {
            if($email.val() === '') {
                $email.addClass('invalid--');
                $emailRequired.addClass('active--');
                $emailInvalid.removeClass('active--');
                return false;
            } else if(!emailRegex.test($email.val())) {
                $email.addClass('invalid--');
                $emailRequired.removeClass('active--');
                $emailInvalid.addClass('active--');
                return false;
            } else {
                $email.removeClass('invalid--');
                $emailRequired.removeClass('active--');
                $emailInvalid.removeClass('active--');
                return true;
            }
        }

        function contactIsValid() {
            if($contact.val() === '') {
                $contact.addClass('invalid--');
                $contactRequired.addClass('active--');
                $contactInvalid.removeClass('active--');
                return false;
            } else if(!contactRegex.test($contact.val())) {
                $contact.addClass('invalid--');
                $contactRequired.removeClass('active--');
                $contactInvalid.addClass('active--');
                return false;
            } else {
                $contact.removeClass('invalid--');
                $contactRequired.removeClass('active--');
                $contactInvalid.removeClass('active--');
                return true;
            }
        }

        function genderIsValid() {
            if($gender.val() === '') {
                $gender.addClass('invalid--');
                $genderRequired.addClass('active--');
                return false;
            } else {
                $gender.removeClass('invalid--');
                $genderRequired.removeClass('active--');
                return true;
            }
        }

        function notesIsValid() {
            if($notes.val() === '') {
                $notes.addClass('invalid--');
                $notesRequired.addClass('active--');
                return false;
            } else {
                $notes.removeClass('invalid--');
                $notesRequired.removeClass('active--');
                return true;
            }
        }

        function updateFormValues() {
            var formFieldsArray = $form.serializeArray();
            var $targetField;
            var $targetFieldValue;

            for(var i = 0; i < formFieldsArray.length; i++) {
                $targetField = $fields.filter('[name="' + formFieldsArray[i].name + '"]');
                $targetFieldValue = $targetField.siblings('.field-value');

                if($targetField.is('select')) {
                    $targetFieldValue.text($targetField.find('option[value="' + formFieldsArray[i].value + '"]').text());
                } else {
                    $targetFieldValue.text(formFieldsArray[i].value);
                }
            }
        }
	});
})(jQuery, this, this.document);