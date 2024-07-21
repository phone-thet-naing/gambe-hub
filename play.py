def displaymode(status, disable_flag):
    if status == "claim_requested" and not disable_flag:
        return "edit"
    else:
        return "disalbed"
    

print(displaymode("approve", False))