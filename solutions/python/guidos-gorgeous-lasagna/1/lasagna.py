EXPECTED_BAKE_TIME = 40

def bake_time_remaining(elapsed_bake_time):
    """Calculate the bake time remaining.
 
   :param elapsed_bake_time: int baking time already elapsed
   :return: int remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'
 
   Function that takes the actual minutes the lasagna has been in the oven as
   an argument and returns how many minutes the lasagna still needs to bake
   based on the `EXPECTED_BAKE_TIME`.
   """
    return EXPECTED_BAKE_TIME - elapsed_bake_time


#TODO: Define the 'preparation_time_in_minutes()' function below.
# You might also consider using 'PREPARATION_TIME' here, if you have it defined.
def preparation_time_in_minutes(number_of_layers):
    
    """Calculate the preparation time in minutes.

    :param number_of_layers: int - how many layers in the lasagna.
    :return: int - preparation time in minutes derived from 'number_of_layers'.

    Function that takes the number of minutes each layer of lasagna needs and returns how many minutes the lasagna takes to prepare based on      the `number_of_layers`.
    """
    return number_of_layers * 2

#TODO: define the 'elapsed_time_in_minutes()' function below.
# Remember to add a docstring (you can copy and then alter the one from bake_time_remaining.)
def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):

    """Calculate the elapsed time in minutes.

    :param number_of_layers: int - how many layers in the lasagna.
    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - how long it has taken to make the lasagna (in minutes) derived from 'number_of_layers' and 'elapsed_bake_time'.

    Function that takes the number of minutes each layer of lasagna needs and how many minutes have already passed in prep based on the     
    `number_of_layers` and 'elapsed_bake_time'.
    """
    
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time
