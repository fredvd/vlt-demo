"""Init and utils."""
from zope.i18nmessageid import MessageFactory

import logging


PACKAGE_NAME = "vlt_demo"

_ = MessageFactory("vlt_demo")

logger = logging.getLogger("vlt_demo")
