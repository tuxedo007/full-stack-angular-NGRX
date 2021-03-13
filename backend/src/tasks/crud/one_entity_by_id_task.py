from typing import TypeVar, Generic, List

from src.core.interfaces.logging import LoggingInterface
from src.core.interfaces.crud import CRUDInterface
from ..task_interface import TaskInterface

EntityType = TypeVar('EntityType')


class OneEntityByIdTask(TaskInterface[List[EntityType]], Generic[EntityType]):

    def __init__(self, logging: LoggingInterface,
                 entities: CRUDInterface[EntityType]):
        self.logging = logging
        self.entities = entities

    def run(self, entity_id: int):
        return self.entities.one_by_id(entity_id)
